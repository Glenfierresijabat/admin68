import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
  return (
    <MainLayout type="goal">
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Goals" variant="col-span-1" />
        <Card
          variant="md:col-span-2"
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card title="Expenses Goals by Category" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card />
        <Card desc="Lorem. ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." />
        <Card />
      </div>
    </MainLayout>
  );
};

export default GoalPage;
