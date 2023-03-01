export interface BookDetails{
    id: number
    title: string;
    author: string;
    cover: string;
    content: string;
    genre: string;
    rating: number;
    reviewsNumber: number;
    reviews: Review[];
  }

export interface Review {
    message: string;
  }