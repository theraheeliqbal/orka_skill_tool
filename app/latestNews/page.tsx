import TopBanner from "@/components/common/TopBanner";
import RecentPosts from "./partials/RecentPosts";
import SearchForm from "./partials/SearchForm";
import SingleBlog from "./partials/SingleBlog";
import WebCategories from "./partials/WebCategories";
import WebTags from "./partials/WebTags";

export default function LatestNewsPage() {
  return (
    <>
      <TopBanner notHome bannerImage="https://megaone.acrothemes.com/insurance/img/news-cover.jpg" title="Latest News" subTitle="Do U Need Life Insurance When U Retire" />

      <section className='py-[7.5rem] bg-white'>
        <div className='container'>
          <div className='flex px-[15px] flex-col lg:flex-row'>
            <div className='w-6/6 lg:w-4/6 '>
              <div className='flex px-[15px] flex-col md:flex-row flex-wrap'>
                {new Array(4).fill(0).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2/2 md:w-1/2 px-[10px] ${index > 1 ? "mt-[50px]" : ""}`}
                  >
                    <SingleBlog />
                  </div>
                ))}
              </div>
            </div>

            <div className='w-6 /6 lg:w-2/6'>
              <SearchForm />
              <RecentPosts />
              <WebTags />
              <WebCategories />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
