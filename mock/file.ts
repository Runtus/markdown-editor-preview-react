import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/filelist",
    method: "get",
    response: () => ({
      status: 200,
      err: null,
      data: [{
        name: "file1",
        isDir: true,
        child: [
          {
            name: "file2",
            isDir: false,
            child: null,
          },
          {
            name: "file3",
            isDir: false,
            child: null,
          },
        ],
      }],
    }),
  },
] as MockMethod[];
