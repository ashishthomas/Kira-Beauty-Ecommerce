import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../../components/common/Button/Button";
import "../styles/ProductReview.scss";
import { useParams } from "react-router";

const categoryFileMap: Record<string, string> = {
  fragrance: "/data/shopdata/FragranceData.json",
  skincare: "/data/shopdata/SkincareData.json",
  makeup: "/data/shopdata/MakeupData.json",
  mensgrooming: "/data/shopdata/MensGroomingData.json",
  topbrands: "/data/shopdata/TopbrandsData.json",
};

export interface ReviewType {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  images?: string[];
  likes: number;
  dislikes: number;
  userAction?: "liked" | "disliked";
}

const ProductReviews: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const [lastAddedReviewId, setLastAddedReviewId] = useState<string | null>(
    null
  );
  const [formData, setFormData] = useState({
    id: "",
    userName: "",
    rating: 0,
    date: "",
    comment: "",
    likes: 0,
    dislikes: 0,
  });
  const [dynamicAverageRating, setDynamicAverageRating] = useState(average);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!category || !id) return;
      const path = categoryFileMap[category.toLowerCase()];
      if (!path) return;
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error("Failed to load data");
        const data: any[] = await res.json();
        const selected = data.find((item) => item.id === parseInt(id));
        if (selected && Array.isArray(selected.reviews)) {
          setReviews(selected.reviews);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchReviews();
  }, [category, id]);

  useEffect(() => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = reviews.length > 0 ? totalRating / reviews.length : 0;
    setDynamicAverageRating(average);
  }, [reviews]);

  const renderStars = (rating: number, isModal?: boolean) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? "filled" : "empty"}`}
        onMouseEnter={() => isModal && setHoveredRating(index + 1)}
        onMouseLeave={() => isModal && setHoveredRating(0)}
        onClick={() => {
          if (isModal) {
            setFormData({ ...formData, rating: index + 1 });
          }
        }}
      />
    ));
  };

  const handleLike = (rid: string) =>
    setReviews((r) =>
      r.map((rv) =>
        rv.id === rid
          ? {
              ...rv,
              likes: rv.likes + (rv.userAction !== "liked" ? 1 : 0),
              dislikes:
                rv.userAction === "disliked" ? rv.dislikes - 1 : rv.dislikes,
              userAction: "liked",
            }
          : rv
      )
    );

  const handleDislike = (rid: string) =>
    setReviews((r) =>
      r.map((rv) =>
        rv.id === rid
          ? {
              ...rv,
              dislikes: rv.dislikes + (rv.userAction !== "disliked" ? 1 : 0),
              likes: rv.userAction === "liked" ? rv.likes - 1 : rv.likes,
              userAction: "disliked",
            }
          : rv
      )
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing && lastAddedReviewId) {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === lastAddedReviewId ? { ...review, ...formData } : review
        )
      );
    } else {
      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date());

      const newReview: ReviewType = {
        id: `${reviews.length + 1}`,
        userName: formData.userName,
        rating: Number(formData.rating),
        date: formattedDate,
        comment: formData.comment,
        likes: 0,
        dislikes: 0,
      };

      setReviews([newReview, ...reviews]);
      setLastAddedReviewId(newReview.id);
    }
    setIsModalOpen(false);
    setFormData({
      id: "",
      userName: "",
      rating: 0,
      date: "",
      comment: "",
      likes: 0,
      dislikes: 0,
    });
    setIsEditing(false);
  };

  const handleAddOrEditReview = () => {
    if (lastAddedReviewId) {
      const reviewToEdit = reviews.find(
        (review) => review.id === lastAddedReviewId
      );
      if (reviewToEdit) {
        setFormData(reviewToEdit);
        setIsEditing(true);
      }
    } else {
      setFormData({
        id: "",
        userName: "",
        rating: 0,
        date: "",
        comment: "",
        likes: 0,
        dislikes: 0,
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="product-reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">Customer Reviews({reviews.length})</h2>
        <Button onClick={handleAddOrEditReview}>
          {lastAddedReviewId ? "Edit Review" : "Add Review"}
        </Button>
      </div>

      <div className="reviews-summary">
        <div className="average-rating">
          <div className="stars">
            {renderStars(Math.round(dynamicAverageRating))}
          </div>
          <span className="rating-number">{dynamicAverageRating}</span>
        </div>
      </div>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="user-info">
                <span className="username">{review.userName}</span>
                <div className="stars">{renderStars(review.rating)}</div>
              </div>
              <div className="review-date">{review.date}</div>
            </div>
            <p className="review-comment">{review.comment}</p>
            {review.images && review.images.length > 0 && (
              <div className="review-images">
                {review.images.map((image, index) => (
                  <img key={index} src={image} alt={`Review ${index + 1}`} />
                ))}
              </div>
            )}
            <div className="review-actions">
              <button
                className={`like-button ${
                  review.userAction === "liked" ? "active" : ""
                }`}
                onClick={() => handleLike(review.id)}
              >
                <span>👍</span>
                <span>{review.likes}</span>
              </button>
              <button
                className={`dislike-button ${
                  review.userAction === "disliked" ? "active" : ""
                }`}
                onClick={() => handleDislike(review.id)}
              >
                <span>👎</span>
                <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="modal"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="modal-content">
            <h3>{isEditing ? "Edit Review" : "Add Review"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={formData.userName}
                onChange={handleInputChange}
                required
              />
              <div className="rating-stars">
                <label>Rating:</label>
                <div className="stars">
                  {renderStars(formData.rating, true)}
                </div>
              </div>
              <textarea
                name="comment"
                placeholder="Comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
