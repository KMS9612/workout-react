import DashBoardBox from "../component/util/box/dashboardBox";

export default function DashBoard() {
  const Dummy = [{}, {}];
  return (
    <div>
      dashboard
      {Dummy.map(() => (
        <DashBoardBox></DashBoardBox>
      ))}
    </div>
  );
}
