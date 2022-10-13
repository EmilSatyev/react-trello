export const initData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-2", "column-1", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo-1",
          cardOrder: [
            "card-1",
            "card-2",
            "card-3",
            "card-5",
            "card-4",
            "card-6",
            "card-7",
          ],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
              image:
                null,
            },
            {
              id: "card-2",
              boardId: "board-2",
              columnId: "column-1",
              title: "Title of card 2",
              image:
                null,
            },
            {
              id: "card-3",
              boardId: "board-3",
              columnId: "column-1",
              title: "Title of card 3",
              image:
                null,
            },
            {
              id: "card-4",
              boardId: "board-4",
              columnId: "column-1",
              title: "Title of card 4",
              image:
                null,
            },
            {
              id: "card-5",
              boardId: "board-5",
              columnId: "column-1",
              title: "Title of card 5",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            },
            {
              id: "card-6",
              boardId: "board-6",
              columnId: "column-1",
              title: "Title of card 6",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            },
            {
              id: "card-7",
              boardId: "board-7",
              columnId: "column-1",
              title: "Title of card 7",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "Todo-2",
          cardOrder: [
            "card-8",
            "card-9",
            "card-10",
          ],
          cards: [
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 8",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 9",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            },
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 10",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            }
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Todo-3",
          cardOrder: [
            "card-11",
          ],
          cards: [
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 11",
              image:
                "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png",
            }
          ],
        },
      ],
    },
  ],
};
