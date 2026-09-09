// Deliberately no Company/Contact/Legal marketing link columns here —
// see MinimalHeader for why this route doesn't use the marketing chrome.
export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center">
      <p className="text-xs text-white/40">
        © {currentYear} Husridge. All rights reserved.
      </p>
    </footer>
  );
}
