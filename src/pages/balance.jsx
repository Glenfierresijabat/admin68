import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem." />
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;
