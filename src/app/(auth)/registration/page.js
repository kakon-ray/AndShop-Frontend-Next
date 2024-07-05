
import PageBanner from "../../../component/PageBanner/PageBanner";
import RegistrationCard from "../../../component/AuthCard/RegistrationCard";

export default function Registation() {

  return (
    <div>
      <PageBanner page="Registation" />
      <div className="form-responsive mx-auto">
        <RegistrationCard/>
      </div>
    </div>
  );
}
