export default function Subscribe() {
  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Subscribe</h1>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/YOUR_PUBLICATION_SLUG"
        method="post"
        target="popupwindow"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="w-full border rounded px-3 py-2 mb-3"
        />
        <button className="w-full border rounded px-3 py-2">Subscribe</button>
      </form>
      <p className="text-xs opacity-60 mt-3">We’ll email you when a new song drops.</p>
    </main>
  );
}
