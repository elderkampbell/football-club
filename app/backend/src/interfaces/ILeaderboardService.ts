export default interface ILeaderboardService {
  getAll(): Promise<object[] | undefined>;
}
