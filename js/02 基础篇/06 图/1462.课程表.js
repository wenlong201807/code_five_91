// https://leetcode-cn.com/problems/course-schedule-iv/submissions/

/** 通过
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const graph = {};
  for (const [course, pre] of prerequisites) {
    if (!graph[pre]) graph[pre] = {};
    graph[pre][course] = true;
  }

  const ans = [];

  const dist = FloydWarshall(graph, numCourses);
  for (const [course, pre] of queries) {
    ans.push(dist[pre][course]);
  }

  return ans;
};

var FloydWarshall = function (graph, n) {
  dist = Array.from({ length: n + 1 }).map(() =>
    Array.from({ length: n + 1 }).fill(false)
  );
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i] && graph[i][j]) dist[i][j] = true;
        if (graph[i] && graph[k]) {
          dist[i][j] = dist[i][j] || (dist[i][k] && dist[k][j]);
        } else if (graph[i]) {
          dist[i][j] = dist[i][j];
        }
      }
    }
  }
  return dist;
};
