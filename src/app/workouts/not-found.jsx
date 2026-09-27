import Link from "next/link";

 const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-lg">


        <h1 className="text-[120px] md:text-[180px] font-black leading-none text-[#C2F800]">
          404
        </h1>

        
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          WORKOUT NOT FOUND
        </h2>

        <p className="text-base-content/60 mt-4 max-w-md mx-auto">
          Looks like this page took a rest day. The workout you're looking
          for doesn't exist or may have been moved.
        </p>

    
        <Link href="/workouts">
          <button className="btn bg-[#C2F800] text-black border-none hover:bg-[#C2F800] mt-8 px-8 rounded-2xl">
            Back to Workouts
          </button>
        </Link>

      </div>
    </main>
  );
}
export default NotFound;
