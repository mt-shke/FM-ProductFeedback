import { useEffect } from "react";
import { useFeedback } from "../../hooks/useFeedback";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useViewport from "../../hooks/useViewport";
import { IPageProps } from "../../interfaces";
import FeedbackList from "../feedback/FeedbackList";
import AsideMenu from "../layout/header/nav/AsideMenu";
import HomeSpinner from "../UI/HomeSpinner";
import HeaderBar from "./HeaderBar";
import NoFeedBack from "./NoFeedback";

const Main: React.FC<IPageProps> = ({ data }) => {
    const { data: updatedUser } = useTypedSelector((state) => state.user);
    const feedbacks = data.feedbacks?.feedbacks;
    const { data: updatedFeedbacks, loading } = useFeedback();
    const viewport = useViewport();

    const isMobile = viewport === "mobile";

    useEffect(() => {}, [updatedFeedbacks, updatedUser]);

    if (updatedFeedbacks)
        return (
            <main className="ctn h-full w-full flex flex-col md:grid md:grid-cols-4 md:px-6 md:my-12 md:gap-6 xl:gap-12">
                {!isMobile && <AsideMenu />}
                <section className="md:flex-c6 md:col-start-2 md:col-end-5 xl:gap-12">
                    {!isMobile && (
                        <HeaderBar
                            user={data.user}
                            feedbacks={updatedFeedbacks}
                        />
                    )}
                    {!updatedFeedbacks && <NoFeedBack user={data.user} />}
                    {updatedFeedbacks && (
                        <FeedbackList list={updatedFeedbacks} />
                    )}
                </section>
            </main>
        );

    if (loading) {
        return (
            <main className="ctn h-full w-full flex flex-col md:grid md:grid-cols-4 md:px-6 md:mt-12 md:gap-6 xl:gap-12">
                {!isMobile && <AsideMenu />}
                <section className="md:flex-c6 md:col-start-2 md:col-end-5 xl:gap-12">
                    {!isMobile && (
                        <HeaderBar user={data.user} feedbacks={feedbacks} />
                    )}
                    {!feedbacks && (
                        <div className="flex flex-col gap-4 items-center justify-center ">
                            <HomeSpinner />
                        </div>
                    )}
                    {feedbacks && <FeedbackList list={feedbacks} />}
                </section>
            </main>
        );
    }

    return (
        <main className="ctn h-full w-full flex flex-col md:grid md:grid-cols-4 md:px-6 md:mt-12 md:gap-6 xl:gap-12">
            {!isMobile && <AsideMenu />}
            <section className="md:flex-c6 md:col-start-2 md:col-end-5 xl:gap-12">
                {!isMobile && (
                    <HeaderBar user={data.user} feedbacks={feedbacks} />
                )}
                {!feedbacks && <NoFeedBack user={data.user} />}
                {feedbacks && <FeedbackList list={feedbacks} />}
            </section>
        </main>
    );
};
export default Main;
