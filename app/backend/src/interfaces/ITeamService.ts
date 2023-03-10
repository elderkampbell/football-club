import ITeam from './ITeam';

export default interface ITeamsServices {
  getAll(): Promise<ITeam[]>
  getById(id: number): Promise<ITeam | null>
}
