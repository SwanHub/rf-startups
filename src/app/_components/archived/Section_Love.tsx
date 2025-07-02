import Link from "next/link";

export function Section_Love() {
  return (
    <section className="pt-24 pb-48 w-full flex justify-center items-center">
      <div className="text-center">
        <span className="text-lg font-medium text-gray-700">
          See the 💜 at{" "}
          <Link
            href="https://love.roboflow.com"
            target="_blank"
            className="text-violet-700 hover:text-violet-900 underline underline-offset-4 decoration-2 decoration-violet-300 transition-colors"
          >
            love.roboflow.com
          </Link>
        </span>
      </div>
    </section>
  );
}
