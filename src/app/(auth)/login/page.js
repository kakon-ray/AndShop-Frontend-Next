import PageBanner from "../../../component/PageBanner/PageBanner";
import LoginCard from "../../../component/AuthCard/LoginCard";

export default function page() {

  return (
    <div>
      <PageBanner page="Login" />
      <div className="form-responsive mx-auto">
       <LoginCard/>
       
      </div>
    </div>
  );
}
