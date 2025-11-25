# 🎨 Creative Assets Approval Portal

A visual approval system for managing and approving ad creative assets (images, videos, GIFs) across multiple campaigns.

---

## 🚀 Quick Start (5 Minutes)

### 1. Create Google Sheet
Create a new Google Sheet with 3 tabs:
- `Client Info`
- `Ad Copies`
- `Creative Assets`

Copy the structure and sample data from `SAMPLE-DATA.md`

### 2. Set Up Apps Script
1. In your sheet: **Extensions → Apps Script**
2. Copy code from `google-apps-script.js`
3. **Deploy → New deployment → Web app**
4. Copy the web app URL

### 3. Configure Portal
1. Open `creatives-approval.html`
2. Update the CONFIG section with:
   - Your Sheet ID
   - Your API Key
   - Apps Script URL

### 4. Launch
- Open `creatives-approval.html` in your browser
- Start reviewing and approving creatives!

---

## 📁 Files Included

| File | Description |
|------|-------------|
| `creatives-approval.html` | The main portal interface (React app) |
| `google-apps-script.js` | Backend script for Google Sheets updates |
| `SETUP-CREATIVE-PORTAL.md` | Complete setup instructions |
| `SAMPLE-DATA.md` | Example data for your Google Sheet |
| `README-CREATIVE-PORTAL.md` | This file |

---

## ✨ Features

✅ **Individual Approval** - Approve, reject, or request edits for each creative
✅ **Multi-Format Support** - Images, videos, and GIFs
✅ **Campaign Organization** - Group creatives by ad copy and campaign
✅ **Feedback System** - Add notes when requesting changes
✅ **Progress Tracking** - Dashboard showing pending, approved, needs edit, rejected
✅ **Filter Views** - Filter by approval status
✅ **Reset Option** - Reset any creative back to pending
✅ **Approval History** - Track who approved what and when

---

## 🎯 Use Cases

Perfect for:
- **Ad Agencies** - Review client ad creatives before launch
- **Marketing Teams** - Internal approval workflow for campaigns
- **Social Media Managers** - Approve multiple post variations
- **E-commerce** - Review product imagery across campaigns
- **Creative Teams** - Collaborative feedback on designs

---

## 📊 How It Works

```
1. Create campaigns in "Ad Copies" sheet
2. Add creative assets in "Creative Assets" sheet (linked by Copy ID)
3. Portal displays campaigns with all associated creatives
4. Team reviews and approves/rejects each creative individually
5. Feedback and status updates sync back to Google Sheet
6. Track progress with real-time dashboard
```

---

## 🎨 Portal Preview

### Main Dashboard
- **Stats Cards**: Total, Pending, Approved, Needs Edit, Rejected
- **Filter Tabs**: View campaigns by creative status
- **Campaign Cards**: Each shows ad copy + all creatives

### Creative Cards
- **Visual Preview**: See image/video/GIF inline
- **Status Badge**: Color-coded status indicator
- **Action Buttons**: Approve ✓ / Needs Edit ✏️ / Reject ✗
- **Feedback Notes**: Add comments when reviewing
- **Approval Info**: Who approved and when

---

## 🔧 Configuration

### Google Sheet Structure

**Ad Copies Sheet:**
```
Copy ID | Campaign | Ad Copy | Headline | Notes | Status | Updated
```

**Creative Assets Sheet:**
```
Asset ID | Copy ID | Name | URL | Type | Status | Feedback | By | Date
```

### Asset Types Supported
- **Image** - JPG, PNG, GIF (static)
- **Video** - MP4, WebM, etc.
- **GIF** - Animated GIFs

### Status Workflow
```
Pending → Approved
        → Needs Edit → (revise) → Pending
        → Rejected
        → (Reset to Pending)
```

---

## 🔗 Integration with Existing Portal

This portal is **separate** from your existing `index.html` ads approval portal.

**Option A: Keep Separate** (Recommended)
- Use `index.html` for approving ad copy
- Use `creatives-approval.html` for approving creative assets
- Different workflows, different portals

**Option B: Combine Later**
- Can be integrated into a single portal with tabs
- Requires custom development

---

## 🛠️ Customization

### Change Approval Workflow
Edit the status buttons in `CreativeAssetCard` component (line ~350)

### Add User Authentication
Add login system before loading portal

### Customize Branding
Update colors, fonts, logo in the HTML/CSS sections

### Add More Fields
Extend Google Sheet columns and update CONFIG mappings

---

## 🔒 Security

⚠️ **Current Setup:**
- API Key exposed in HTML (read-only access to sheets)
- Apps Script URL is public
- No user authentication

✅ **For Production:**
- Restrict API key to specific domains in Google Cloud Console
- Add password protection to HTML file
- Use Google OAuth for user authentication
- Set up proper access controls

---

## 📱 Mobile Support

The portal is responsive and works on:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Tablets (iPad, Android tablets)
- ⚠️ Mobile phones (works, but better on larger screens)

---

## 🐛 Common Issues

**"Connection Error"**
→ Check Sheet ID and API Key in CONFIG

**Images not loading**
→ Use direct links, not "view only" Google Drive links

**Updates not saving**
→ Verify Apps Script URL and deployment settings

**No campaigns showing**
→ Ensure Ad Copies have Status = "Active"

---

## 📚 Documentation

- **Full Setup Guide:** `SETUP-CREATIVE-PORTAL.md`
- **Sample Data:** `SAMPLE-DATA.md`
- **Apps Script:** `google-apps-script.js`

---

## 💡 Pro Tips

1. **Start Small** - Test with 2-3 campaigns first
2. **Use Direct Links** - Google Drive direct links work best
3. **Match IDs** - Copy IDs must match exactly between sheets
4. **Clear Names** - Use descriptive names for easy tracking
5. **Regular Backups** - Copy your Google Sheet regularly

---

## 🤝 Workflow Recommendations

### For Small Teams (1-5 people)
1. One person creates campaigns and uploads assets to sheet
2. Team reviews creatives in portal
3. Feedback goes back to designer
4. Designer updates and resets to pending
5. Final approval and export

### For Larger Teams (5+ people)
1. Project manager creates campaigns
2. Designer uploads multiple variations
3. Creative director reviews in portal
4. Client reviews approved creatives (optional)
5. Final approved assets exported to ad platforms

---

## 🎉 Benefits Over Other Tools

| Feature | This Portal | Monday.com | Airtable | Notion |
|---------|-------------|------------|----------|--------|
| Cost | **Free** | $10+/user | $20+/user | $10+/user |
| Setup Time | **5 mins** | 30 mins | 20 mins | 30 mins |
| Custom Branding | **Yes** | Limited | Limited | Limited |
| Google Sheets | **Native** | Integration | Integration | Integration |
| Self-Hosted | **Yes** | No | No | No |
| Video Support | **Yes** | Yes | Yes | Limited |

---

## 📈 What's Next?

Potential enhancements:
- [ ] Add user authentication
- [ ] Export approved creatives to PDF
- [ ] Bulk approve/reject
- [ ] Comments/threads per creative
- [ ] Version history tracking
- [ ] Integration with ad platforms (Meta, Google Ads)
- [ ] Email notifications for status changes
- [ ] Analytics dashboard

---

## 📞 Need Help?

1. Check `SETUP-CREATIVE-PORTAL.md` for detailed setup
2. Review `SAMPLE-DATA.md` for data structure examples
3. Inspect browser console (F12) for error messages
4. Verify Google Sheet permissions and API access

---

## 🎯 Built For

This portal is designed for marketing teams and agencies who need a simple, visual way to review and approve creative assets across multiple campaigns without the overhead of expensive project management tools.

---

**Built with:** React 18, Google Sheets API, Google Apps Script
**No frameworks required:** Runs directly in browser
**No backend needed:** Google Sheets is your database

---

Enjoy your new creative approval workflow! 🚀
