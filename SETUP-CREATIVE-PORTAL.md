# Creative Assets Approval Portal - Setup Guide

This guide will help you set up the Creative Assets Approval Portal for reviewing and approving ad creatives (images, videos, GIFs).

## 📋 Overview

This portal allows you to:
- Track multiple ad campaigns with different copy variations
- Attach 2-4+ creative assets per ad copy
- Individually approve/reject/request edits for each creative
- Support images, videos, and GIFs
- Track approval history and feedback

---

## 🗂️ Step 1: Create Google Sheets Structure

### Sheet 1: **"Client Info"**
This can be the same as your existing ads approval portal.

| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| Client ID | Business Name | Website URL | Destination URL | Profile Image |
| 1 | Your Business | https://yourwebsite.com | https://yourwebsite.com/landing | https://... |

---

### Sheet 2: **"Ad Copies"**

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **Copy ID** | **Campaign Name** | **Ad Copy Text** | **Headline** | **Notes** | **Status** | **Last Updated** |
| COPY-001 | Summer Sale 2024 | Save 50% on all items this summer! Limited time only. | 50% Off Summer Sale | Internal note here | Active | 2024-01-15 |
| COPY-002 | Winter Promo | Stay warm with our winter collection. | Winter Collection | | Active | 2024-01-16 |

**Column Guide:**
- **A - Copy ID**: Unique identifier (e.g., COPY-001, COPY-002)
- **B - Campaign Name**: Campaign or angle name
- **C - Ad Copy Text**: The ad body text
- **D - Headline**: The ad headline
- **E - Notes**: Internal notes (optional)
- **F - Status**: Active or Archived (only "Active" shows in portal)
- **G - Last Updated**: Date of last update

---

### Sheet 3: **"Creative Assets"**

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **Asset ID** | **Copy ID** | **Asset Name** | **Asset URL** | **Asset Type** | **Status** | **Feedback Notes** | **Approved By** | **Approved Date** |
| ASSET-001 | COPY-001 | Hero Image v1 | https://drive.google.com/... | Image | Pending | | | |
| ASSET-002 | COPY-001 | Hero Image v2 | https://drive.google.com/... | Image | Approved | Looks great! | Admin | 2024-01-15 |
| ASSET-003 | COPY-001 | Product Video | https://drive.google.com/... | Video | Needs Edit | Adjust the intro | Admin | 2024-01-15 |
| ASSET-004 | COPY-002 | Animated GIF | https://drive.google.com/... | GIF | Pending | | | |

**Column Guide:**
- **A - Asset ID**: Unique identifier (e.g., ASSET-001)
- **B - Copy ID**: Links to "Ad Copies" sheet (must match Copy ID)
- **C - Asset Name**: Descriptive name for the asset
- **D - Asset URL**: Direct link to image/video/GIF
  - **Google Drive**: Use direct link format (see below)
  - **Other**: Direct URL to media file
- **E - Asset Type**: Image, Video, or GIF
- **F - Status**: Pending, Approved, Needs Edit, Rejected
- **G - Feedback Notes**: Will be filled by portal when approving/rejecting
- **H - Approved By**: Auto-filled by portal
- **I - Approved Date**: Auto-filled by portal

---

## 🔗 Step 2: Getting Direct Links for Google Drive Files

If you're hosting images/videos on Google Drive:

1. Upload your file to Google Drive
2. Right-click → "Get link" → Set to "Anyone with the link can view"
3. Copy the link (looks like: `https://drive.google.com/file/d/FILE_ID/view`)
4. Convert to direct link format:

**Original:**
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9/view
```

**Direct link for images:**
```
https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9
```

**Direct link for videos:**
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9/preview
```

---

## ⚙️ Step 3: Set Up Google Apps Script

1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. Delete any existing code
4. Copy and paste the script from `google-apps-script.js` (see below)
5. Click **Deploy → New deployment**
6. Choose type: **Web app**
7. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**
9. Copy the **Web app URL** (you'll need this for the HTML file)

---

## 🔧 Step 4: Configure the HTML File

Open `creatives-approval.html` and update the CONFIG section:

```javascript
const CONFIG = {
    SHEET_ID: 'YOUR_SHEET_ID_HERE',           // Your Google Sheet ID
    API_KEY: 'YOUR_API_KEY_HERE',              // Google Sheets API key
    AD_COPIES_SHEET: 'Ad Copies',              // Sheet name
    CREATIVE_ASSETS_SHEET: 'Creative Assets',  // Sheet name
    CLIENT_INFO_SHEET: 'Client Info',          // Sheet name
    APPS_SCRIPT_URL: 'YOUR_APPS_SCRIPT_URL',   // From Step 3
    ...
};
```

**To find your Sheet ID:**
- Open your Google Sheet
- Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
- Copy the SHEET_ID part

**To create an API key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google Sheets API**
4. Create credentials → API Key
5. Copy the API key

---

## 🚀 Step 5: Deploy the Portal

1. Upload `creatives-approval.html` to your web hosting
2. Or open it locally in your browser for testing
3. The portal will load data from your Google Sheet automatically

---

## 📊 How It Works

### Workflow:

1. **Add campaigns** to "Ad Copies" sheet (set Status = "Active")
2. **Add creative assets** to "Creative Assets" sheet (link to Copy ID)
3. **Open the portal** in your browser
4. **Review creatives** for each ad copy
5. **Approve/Reject/Request Edits** for each creative individually
6. **Add feedback notes** when rejecting or requesting edits
7. **Track progress** with stats dashboard and filters

### Features:

- ✅ **Individual approval** - Each creative gets its own approval status
- 🎨 **Media support** - Images, videos, and GIFs
- 📝 **Feedback system** - Add notes when requesting changes
- 📊 **Progress tracking** - Dashboard shows pending, approved, needs edit, rejected
- 🔍 **Filters** - Filter by status to focus on specific creatives
- ↩️ **Reset option** - Reset any creative back to pending

---

## 🎯 Best Practices

1. **Copy IDs must match** - Make sure Copy ID in "Creative Assets" matches exactly with "Ad Copies"
2. **Use direct links** - Test your image/video URLs before adding to sheet
3. **Clear naming** - Use descriptive names for assets (e.g., "Hero Image v2", "Product Video - 30s")
4. **Asset types** - Use exactly: Image, Video, or GIF (case-sensitive)
5. **Regular backups** - Make copies of your Google Sheet regularly

---

## 🔒 Security Notes

- The API key is exposed in the HTML (read-only access to sheets)
- Apps Script URL is public but only accepts POST requests
- For production, consider adding authentication
- Restrict API key to specific domains in Google Cloud Console

---

## 🐛 Troubleshooting

**Portal shows "Connection Error":**
- Check SHEET_ID is correct
- Verify API_KEY is valid
- Ensure Google Sheets API is enabled in Cloud Console
- Check sheet names match exactly (case-sensitive)

**Images/Videos not loading:**
- Verify the URLs are direct links (not view-only links)
- Check Google Drive sharing permissions (Anyone with link)
- Test the URL directly in browser

**Updates not saving:**
- Check APPS_SCRIPT_URL is correct
- Verify Apps Script deployment settings
- Check browser console for errors (F12)

**No campaigns showing:**
- Ensure "Ad Copies" sheet has Status = "Active"
- Check there are rows beyond the header row
- Verify column indexes in CONFIG match your sheet structure

---

## 📞 Support

For issues or questions, refer to:
- Google Sheets API documentation
- Google Apps Script documentation
- Check browser console (F12) for error messages

---

## 🎉 You're All Set!

Your creative assets approval portal is ready to use. Start adding campaigns and creatives to your Google Sheet and review them in the portal!
