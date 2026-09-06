# Patel Cha Raja — Ganpati Invitation

A responsive Next.js invitation website prepared for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel, select **Add New → Project**.
3. Import the repository.
4. Keep the detected framework as **Next.js** and click **Deploy**.

## Edit details

All invitation text, dates, schedule, family names, map link and RSVP button are in:

`app/page.js`

## Replace gallery placeholders

Place photos inside `public/images/`, for example:

- `public/images/ganpati.jpg`
- `public/images/family.jpg`
- `public/images/decoration.jpg`

Then replace a placeholder `<div className="photo ...">` in `app/page.js` with:

```jsx
<div className="photo p1" style={{backgroundImage: "url('/images/ganpati.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
```

## Add WhatsApp RSVP

Replace the disabled RSVP link with:

```jsx
<a className="primary" href="https://wa.me/91XXXXXXXXXX?text=I%20will%20attend%20Patel%20Cha%20Raja" target="_blank">WhatsApp RSVP</a>
```

Use the full number with country code and no `+`, spaces or dashes.

## Music

The uploaded flute track is stored at:

`public/music/ekdantay-flute.mp3`
