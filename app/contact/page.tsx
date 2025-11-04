export default function ContactPage() {
  return (
    <main className=" text-gray-300 px-6 py-16">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          I’d love to connect! Whether you want to collaborate, ask questions, or just say hello —
          feel free to reach out.
        </p>
        <div className="space-y-4">
          <p>Email: <a href="mailto:margaretajibola3@gmail.com" className="text-blue-600 hover:underline">margaretajibola3@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/margaretajibola" className="text-blue-600 hover:underline" target="_blank">github.com/margaretajibola</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/margaret-ajibola-5a324a160/" className="text-blue-600 hover:underline" target="_blank">linkedin.com/in/margaret-ajibola</a></p>
        </div>
      </section>
    </main>
  );
}
