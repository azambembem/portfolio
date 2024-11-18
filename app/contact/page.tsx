import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center mt-32">Contact!</h1>
      <div className="mt-4 text-center">
        <h3 className="text-2xl">Email: azam123@naver.com</h3>
        <div className="flex items-center justify-center mt-4 text-2sm">
          GitHub:
          <a
            href="https://github.com/azambembem"
            target="_blank"
            className="ml-2"
          >
            <img
              src="data:image/jpeg;base64,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"
              className="h-10 w-10"
            />
          </a>
        </div>
        <div className="flex items-center justify-center mt-4 text-2sm">
          Netlify:
          <a
            href="https://app.netlify.com/teams/azambembem/sites"
            target="_blank"
            className="ml-2"
          >
            <img
              src="https://th.bing.com/th/id/OIP.H2vq7a1mPH7N4Sk_11TyqAHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="h-10 w-10"
            />
          </a>
        </div>
        <div className="flex items-center justify-center mt-4 text-2sm">
          Notion:
          <a
            href="https://www.notion.so/5dfaacfeb1a14b0898fdc281d5cad815"
            target="_blank"
            className="ml-2"
          >
            <img
              src="https://th.bing.com/th/id/OIP._7jQBYFdrWpzJDAVx64oSQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="h-10 w-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
