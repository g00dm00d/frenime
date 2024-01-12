export default function Header({ title }) {
  return (
    <h1 className="text-third dark:text-dark-third text-center text-xl font-bold p-2">
      {title}
    </h1>
  );
}
