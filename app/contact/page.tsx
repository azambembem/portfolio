// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700">
          Email: <span className="text-blue-500">contact@ourblog.com</span>
        </p>
        <p className="text-gray-700">
          Phone: <span className="text-blue-500">+123 456 7890</span>
        </p>
      </div>
    </div>
  );
}
