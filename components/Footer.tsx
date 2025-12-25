export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Ayo. All rights reserved.</p>
      </div>
    </footer>
  );
}
