import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensePage = () => {
  return (
    <MainLayout type="expense">
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card
          title="Expenses Comparison"
          variant="md:col-span-3 text-primary"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card title="Expenses Breakdown" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        <Card title="&nbsp;" />
        <Card />
        <Card />
        <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." />
      </div>
    </MainLayout>
  );
};

export default ExpensePage;
