# Zefmesh storefront

Static site. No build step, no dependencies to install.

## Run locally
Any static server works, for example:

    npx serve .

Then open http://localhost:3000 (it redirects to `Home.dc.html`).
Opening the files directly with `file://` will not work, because pages load each other over HTTP.

## Push to GitHub
1. Create an empty repository on github.com (for example `zefmesh-storefront`).
2. From this folder:

        git init
        git add .
        git commit -m "Zefmesh storefront"
        git branch -M main
        git remote add origin https://github.com/<you>/zefmesh-storefront.git
        git push -u origin main

   Or drag the folder's contents into the repository's "uploading an existing file" page on github.com.

## Deploy on Vercel
1. vercel.com → Add New → Project → import the repository.
2. Framework preset: **Other**. Build command: leave empty. Output directory: leave empty (root).
3. Deploy. Every push to `main` redeploys.

## Files
- `*.dc.html`: one file per page; `Header`, `Footer` and `ProductCard` are shared parts.
- `zef-data.js`: products, rooms, sets, showrooms and the quote-list store.
- `support.js`: page runtime. Loads React from unpkg.com at runtime.
- `assets/`: logo files.

Quote requests are not sent anywhere yet: the form stores the last request in the browser. Connect it to email, WhatsApp Business or a backend before launch.
