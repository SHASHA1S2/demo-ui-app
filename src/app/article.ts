import { Affiliation } from './affiliation';
import { Author } from './author';
export class Article {

  public journal: string;
  public title: string;
  public volume: number;
  public issue: number;
  public id: string;
  public month: string;
  public year: number;
  public keywords: string[];
  public doi: string;
  public authors: Author[];
  public affiliations: Affiliation[];
  public description: string[];
}
