# Sample Data for Creative Assets Approval Portal

This document shows example data for your Google Sheets. Copy these examples to get started quickly.

---

## 📊 Sheet 1: "Client Info"

**Row 1 (Header):**
```
Client ID | Business Name | Website URL | Destination URL | Profile Image
```

**Row 2 (Data Example):**
```
1 | Acme Fashion | https://acmefashion.com | https://acmefashion.com/shop | https://via.placeholder.com/150
```

---

## 📊 Sheet 2: "Ad Copies"

**Row 1 (Header):**
```
Copy ID | Campaign Name | Ad Copy Text | Headline | Notes | Status | Last Updated
```

**Row 2-5 (Data Examples):**

| Copy ID | Campaign Name | Ad Copy Text | Headline | Notes | Status | Last Updated |
|---------|---------------|--------------|----------|-------|--------|--------------|
| COPY-001 | Summer Sale 2024 | Save 50% on all summer items! Limited time only. Don't miss out on our biggest sale of the year. | 50% Off Summer Sale | High priority campaign | Active | 2024-01-15 |
| COPY-002 | Winter Collection | Stay warm and stylish with our new winter collection. Premium quality, affordable prices. | New Winter Arrivals | Need to test different angles | Active | 2024-01-16 |
| COPY-003 | Flash Sale | 24-hour flash sale! Up to 70% off selected items. Shop now before they're gone! | Flash Sale - 70% Off | Short campaign - 24hrs only | Active | 2024-01-17 |
| COPY-004 | Back to School | Get ready for school with our latest collection. Everything you need at amazing prices. | Back to School Sale | Target: Parents, Students | Active | 2024-01-18 |

---

## 📊 Sheet 3: "Creative Assets"

**Row 1 (Header):**
```
Asset ID | Copy ID | Asset Name | Asset URL | Asset Type | Status | Feedback Notes | Approved By | Approved Date
```

**Row 2-13 (Data Examples):**

### For COPY-001 (Summer Sale - 4 creatives)

| Asset ID | Copy ID | Asset Name | Asset URL | Asset Type | Status | Feedback Notes | Approved By | Approved Date |
|----------|---------|------------|-----------|------------|--------|----------------|-------------|---------------|
| ASSET-001 | COPY-001 | Summer Hero Image v1 | https://images.unsplash.com/photo-1523359346063-d879354169f9 | Image | Approved | Perfect! Use this one. | Sarah | 2024-01-15 10:30 |
| ASSET-002 | COPY-001 | Summer Hero Image v2 | https://images.unsplash.com/photo-1441986300917-64674bd600d8 | Image | Needs Edit | Too dark, brighten it up | Sarah | 2024-01-15 10:32 |
| ASSET-003 | COPY-001 | Summer Product Video | https://www.w3schools.com/html/mov_bbb.mp4 | Video | Approved | Great! | Sarah | 2024-01-15 10:35 |
| ASSET-004 | COPY-001 | Summer Animated GIF | https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif | GIF | Rejected | Not on brand | Sarah | 2024-01-15 10:40 |

### For COPY-002 (Winter Collection - 3 creatives)

| Asset ID | Copy ID | Asset Name | Asset URL | Asset Type | Status | Feedback Notes | Approved By | Approved Date |
|----------|---------|------------|-----------|------------|--------|----------------|-------------|---------------|
| ASSET-005 | COPY-002 | Winter Lifestyle Shot | https://images.unsplash.com/photo-1483985988355-763728e1935b | Image | Pending | | | |
| ASSET-006 | COPY-002 | Winter Product Grid | https://images.unsplash.com/photo-1445205170230-053b83016050 | Image | Pending | | | |
| ASSET-007 | COPY-002 | Winter Collection Video | https://www.w3schools.com/html/movie.mp4 | Video | Pending | | | |

### For COPY-003 (Flash Sale - 2 creatives)

| Asset ID | Copy ID | Asset Name | Asset URL | Asset Type | Status | Feedback Notes | Approved By | Approved Date |
|----------|---------|------------|-----------|------------|--------|----------------|-------------|---------------|
| ASSET-008 | COPY-003 | Flash Sale Banner Red | https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da | Image | Approved | Strong CTA! | John | 2024-01-17 14:20 |
| ASSET-009 | COPY-003 | Flash Sale Banner Yellow | https://images.unsplash.com/photo-1607082349566-187342175e2f | Image | Approved | Good alternative | John | 2024-01-17 14:22 |

### For COPY-004 (Back to School - 4 creatives)

| Asset ID | Copy ID | Asset Name | Asset URL | Asset Type | Status | Feedback Notes | Approved By | Approved Date |
|----------|---------|------------|-----------|------------|--------|----------------|-------------|---------------|
| ASSET-010 | COPY-004 | BTS Kids Photo | https://images.unsplash.com/photo-1503676260728-1c00da094a0b | Image | Needs Edit | Add text overlay | Mike | 2024-01-18 09:15 |
| ASSET-011 | COPY-004 | BTS Product Flat Lay | https://images.unsplash.com/photo-1546410531-bb4caa6b424d | Image | Pending | | | |
| ASSET-012 | COPY-004 | BTS Promo Video 15s | https://www.w3schools.com/html/mov_bbb.mp4 | Video | Pending | | | |
| ASSET-013 | COPY-004 | BTS Animated Countdown | https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif | GIF | Pending | | | |

---

## 🎯 Key Points

### Copy IDs MUST Match
- In "Creative Assets" sheet, the **Copy ID** (Column B) must exactly match a **Copy ID** from "Ad Copies" sheet (Column A)
- Example: If you have "COPY-001" in Ad Copies, all related assets must have "COPY-001" in Creative Assets

### Asset Types
Use exactly one of these (case-sensitive):
- `Image`
- `Video`
- `GIF`

### Status Values
For "Ad Copies" sheet:
- `Active` - Shows in portal
- `Archived` - Hidden from portal

For "Creative Assets" sheet:
- `Pending` - Awaiting review (default)
- `Approved` - Approved for use
- `Needs Edit` - Needs changes
- `Rejected` - Not approved

### Asset URLs
**For testing, you can use these free image sources:**
- Unsplash: `https://images.unsplash.com/photo-...`
- Placeholder: `https://via.placeholder.com/600x400`
- Sample videos: `https://www.w3schools.com/html/mov_bbb.mp4`

**For production, use:**
- Google Drive direct links (see SETUP guide)
- Your own hosting
- CDN URLs

---

## 📝 How to Use This Sample Data

1. Create a new Google Sheet
2. Create 3 tabs: "Client Info", "Ad Copies", "Creative Assets"
3. Copy the headers (Row 1) for each sheet
4. Copy the sample data rows
5. Replace the sample data with your actual campaigns and creatives
6. Update the URLs to point to your actual assets
7. Test with the portal!

---

## 🔗 Next Steps

1. Copy this sample data to your Google Sheet
2. Test that the data displays correctly
3. Follow the SETUP-CREATIVE-PORTAL.md guide
4. Replace sample data with your real campaigns
5. Start reviewing and approving creatives!

---

## 💡 Pro Tips

**Organize Your Assets:**
- Use clear naming: "Campaign Name - Asset Type - Version"
- Example: "Summer Sale - Hero Image - v2"

**Copy ID Naming:**
- Keep it simple: COPY-001, COPY-002, etc.
- Or use descriptive: SUMMER-2024, WINTER-PROMO, etc.

**Asset ID Naming:**
- Sequential: ASSET-001, ASSET-002, etc.
- Or descriptive: SUMMER-IMG-001, WINTER-VID-001, etc.

**Testing:**
- Start with 2-3 campaigns and 2-3 creatives each
- Verify everything works before adding more
- Test all three status changes (Approve, Needs Edit, Reject)

---

Happy creating! 🎨
