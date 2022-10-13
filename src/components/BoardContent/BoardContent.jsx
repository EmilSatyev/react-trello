import React from "react";
import styles from "./BoardContent.module.scss";
import cnBind from "classnames/bind";
import image1 from "../../assets/image/slider.jpg";
import Column from "../Column/Column";
import { initData } from "../../actions/initData";
import _ from "lodash";
import { mapOrder } from "../../utils/sorts";

const cx = cnBind.bind(styles);

const BoardContent = () => {
  const [board, setBoard] = React.useState({});
  const [columns, setColumns] = React.useState([]);

  React.useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);

      boardInitData.columns.sort(
        (a, b) =>
          boardInitData.columnOrder.indexOf(a.id) -
          boardInitData.columnOrder.indexOf(b.id)
      );
      setColumns(
        mapOrder(boardInitData.columns, boardInitData.columnOrder, "id")
      );
    }
  }, []);

  if (_.isEmpty(board)) {
    return <div className="not-found">Board is not found</div>;
  }

  return (
    <div className={styles.boardColumns}>
      {columns &&
        columns.length > 0 &&
        columns.map((column) => <Column key={column.id} column={column} />)}
    </div>
  );
};

export default BoardContent;
