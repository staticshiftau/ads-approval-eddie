/**
 * Google Apps Script for Creative Assets Approval Portal
 *
 * This script handles POST requests from the creative approval portal
 * to update the status, feedback notes, and approval info for creative assets.
 *
 * SETUP:
 * 1. Copy this entire code
 * 2. Open your Google Sheet → Extensions → Apps Script
 * 3. Paste this code
 * 4. Click Deploy → New deployment → Web app
 * 5. Set "Execute as: Me" and "Who has access: Anyone"
 * 6. Copy the web app URL and use it in your HTML file
 */

// Sheet names - MUST match your Google Sheet tab names
const SHEET_NAMES = {
  CREATIVE_ASSETS: 'Creative Assets',
  AD_COPIES: 'Ad Copies'
};

// Column indexes (0-based) for Creative Assets sheet
const ASSET_COLUMNS = {
  ASSET_ID: 0,          // Column A
  COPY_ID: 1,           // Column B
  ASSET_NAME: 2,        // Column C
  ASSET_URL: 3,         // Column D
  ASSET_TYPE: 4,        // Column E
  STATUS: 5,            // Column F
  FEEDBACK_NOTES: 6,    // Column G
  APPROVED_BY: 7,       // Column H
  APPROVED_DATE: 8      // Column I
};

/**
 * Main function - handles POST requests from the portal
 */
function doPost(e) {
  try {
    // Parse the incoming request
    const data = JSON.parse(e.postData.contents);

    // Log for debugging
    Logger.log('Received request: ' + JSON.stringify(data));

    // Get the spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const assetsSheet = ss.getSheetByName(SHEET_NAMES.CREATIVE_ASSETS);

    if (!assetsSheet) {
      throw new Error('Creative Assets sheet not found');
    }

    // Handle different actions
    if (data.action === 'updateAsset') {
      return updateAssetStatus(assetsSheet, data);
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Unknown action'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Updates the status of a creative asset
 */
function updateAssetStatus(sheet, data) {
  try {
    const rowIndex = data.rowIndex;
    const status = data.status || '';
    const feedbackNotes = data.feedbackNotes || '';
    const approvedBy = data.approvedBy || 'Admin';
    const approvedDate = data.approvedDate || new Date().toISOString();

    // Update the row
    // Column F: Status
    sheet.getRange(rowIndex, ASSET_COLUMNS.STATUS + 1).setValue(status);

    // Column G: Feedback Notes
    sheet.getRange(rowIndex, ASSET_COLUMNS.FEEDBACK_NOTES + 1).setValue(feedbackNotes);

    // Column H: Approved By
    sheet.getRange(rowIndex, ASSET_COLUMNS.APPROVED_BY + 1).setValue(approvedBy);

    // Column I: Approved Date
    sheet.getRange(rowIndex, ASSET_COLUMNS.APPROVED_DATE + 1).setValue(approvedDate);

    Logger.log('Successfully updated row ' + rowIndex + ' to status: ' + status);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Asset updated successfully',
      rowIndex: rowIndex,
      status: status
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error updating asset: ' + error.toString());
    throw error;
  }
}

/**
 * Optional: Function to test the script
 * Run this from the Apps Script editor to test
 */
function testUpdateAsset() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.CREATIVE_ASSETS);

  const testData = {
    action: 'updateAsset',
    rowIndex: 2, // Test with row 2 (first data row after header)
    status: 'Approved',
    feedbackNotes: 'Test feedback from Apps Script',
    approvedBy: 'Test Admin',
    approvedDate: new Date().toISOString()
  };

  const result = updateAssetStatus(sheet, testData);
  Logger.log('Test result: ' + result.getContent());
}

/**
 * Optional: GET handler for testing
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Creative Assets Approval Portal API is running',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
