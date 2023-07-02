export default interface IProducts {
  id?: string,
  title: string,
  avgRating?: number,
  ratings?: number,
  price: number,
  oldPrice?: number,
  uri: string,
  options?: string[],
}