# First Go Services — Static Site

Plain HTML / CSS / JS version. No build step required.

## Files
- `index.html` — markup
- `styles.css` — all styling (design tokens, layout, components)
- `script.js` — marquee, fade-in, services/industries/approach rendering, contact form
- `assets/logo.png` — company logo

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Contact form
The static version uses a `mailto:` link to `careers@firstgoservices.in`
(opens the user's mail client). To send emails server-side, wire the form's
submit handler in `script.js` to your backend / SMTP endpoint.
