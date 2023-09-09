import { useDrag } from "react-dnd";
import { ItemTypes } from "./ITEM_TYPE";
const style = {
  position: "absolute",
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  cursor: "move",
};
export const Box = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <div className="box" ref={drag} style={{ ...style, left, top }} data-testid="box">
      {children}
    </div>
  );
};
