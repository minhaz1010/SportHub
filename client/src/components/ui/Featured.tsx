
interface Category {
  name: string;
  emoji: string;
}

const categories: Category[] = [
  { name: 'Cricket', emoji: '🏏' },
  { name: 'Football', emoji: '⚽' },
  { name: 'Baseball', emoji: '⚾' },
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Softball', emoji: '🥎' },
  { name: 'Volleyball', emoji: '🏐' },
];
const Featured = () => {
  return (
    <div className="w-full h-screen   p-5">
      <div className="w-full  font-roboto-condensed  text-center">
        <h3 className="mb-6  whitespace-nowrap  text-4xl font-roboto-condensed  md:text-5xl  lg:text-7xl">Featured Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 container mx-auto">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg hover:shadow-2xl hover:ring-offset-1 hover:ring-2  p-4 flex flex-col items-center justify-center transition-transform  duration-500 hover:scale-105 cursor-pointer"
            >
              <span className=" text-6xl mb-4">{category.emoji}</span>
              <span className="text-center font-light font-roboto-condensed text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Featured;