import Banner from "../../Components/Baneer/Banner";
import Footer from "../../Components/Footer/Footer";
import UserTypesSection from "../../Components/UsersTypeSection/UserTypeSection";


const HomePage = () => {
    return (
        <div className=" space-y-28">
          <Banner></Banner>
          <UserTypesSection></UserTypesSection>
          <Footer></Footer>
        </div>
    );
};

export default HomePage;