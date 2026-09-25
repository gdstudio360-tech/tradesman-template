# Tradesman Website Template — V2

A premium-looking, lightweight static website template aimed at UK tradespeople.

## Demo business
The current content uses the fictional demo business **Northfield Electrical** in Ipswich & Suffolk.

## Included
- Responsive desktop/mobile layout
- Sticky navigation
- Strong hero / CTA section
- Services
- Simple customer journey
- Project showcase
- Reviews section
- Service-area section
- FAQ
- Quote form
- Click-to-call and WhatsApp links
- LocalBusiness / Electrician structured data
- No Google Fonts
- No external JS libraries

## Replace before using for a real client
Search these demo details:
- `Northfield Electrical`
- `07700 900123`
- `+447700900123`
- `hello@northfieldelectrical.co.uk`
- `Ipswich`
- `Suffolk`

Also replace:
- all demo reviews with genuine reviews
- project artwork with real photos
- service list with actual services
- areas covered
- structured data in `<head>`
- availability wording
- any claims such as insurance, memberships, qualifications or ratings with verified client facts

## GitHub Pages update
Upload `index.html`, `styles.css`, `script.js` and `README.md` to the repository root.

If files with the same names already exist, commit the replacements. GitHub Pages should redeploy automatically after the commit.

## Demo contact behaviour
This public demo deliberately does **not** send enquiries, make calls, open WhatsApp or launch an email client.

Call / WhatsApp / Email actions and the quote form display a clear demo modal instead.
The form validates the fields locally, then confirms that no personal details were transmitted or stored.

For a real client, replace the demo contact behaviour with verified client details and a real form handler such as:
- Formspree
- Netlify Forms
- Cloudflare Worker / Pages Functions
- a custom backend

## Important
This is a demo template. The yellow **DEMO WEBSITE** ribbon is deliberate. Remove it only after replacing the fictional business content with a real client's verified details.


## V3 — Safe public demo

Changes:
- marked the page `noindex,nofollow` so the fictional electrician is not presented to search engines as a real local business
- removed fictional Electrician structured data
- changed title/meta text to identify the site as a demo
- disabled fake phone, WhatsApp and email actions
- removed the old `mailto:` quote submission
- added an accessible demo modal explaining that no enquiry was sent
- the quote form now validates locally and sends/stores nothing
- added a direct CTA from the demo to the GD TradeWeb sales website
