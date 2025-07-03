import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../../components/common/Button/Button";
import "../styles/ProductReview.scss";
import { useParams } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const categoryFileMap: Record<string, string> = {
  fragrance: "/data/shopdata/FragranceData.json",
  skincare: "/data/shopdata/SkincareData.json",
  makeup: "/data/shopdata/MakeupData.json",
  mensgrooming: "/data/shopdata/MensgroomingData.json",
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
  const [average] = useState<number>(0);
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

  const getLoggedInUserName = () => {
    const token = localStorage.getItem("token");
    if (!token) return "";
    const usersStr = localStorage.getItem("users");
    const users = usersStr ? JSON.parse(usersStr) : {};
    const email = Object.keys(users).find(
      (key) => users[key] && users[key].name && token
    );
    return email && users[email] ? users[email].name : "";
  };
  const loggedInUserName = getLoggedInUserName();
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

  const renderStars = (
    rating: number,
    isModal?: boolean,
    hoveredRating?: number,
    setHoveredRating?: (val: number) => void
  ) => {
    const displayRating =
      hoveredRating && hoveredRating > 0 ? hoveredRating : rating;
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < displayRating ? "filled" : "empty"}`}
        onMouseEnter={() =>
          isModal && setHoveredRating && setHoveredRating(index + 1)
        }
        onMouseLeave={() => isModal && setHoveredRating && setHoveredRating(0)}
        onClick={() => {
          if (isModal) {
            formik.setFieldValue("rating", index + 1);
          }
        }}
      />
    ));
  };

  const handleLike = (rid: string) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) => {
        if (review.id !== rid) return review;

        const isLiked = review.userAction === "liked";
        const isDisliked = review.userAction === "disliked";

        return {
          ...review,
          likes: isLiked ? review.likes - 1 : review.likes + 1,
          dislikes: isDisliked ? review.dislikes - 1 : review.dislikes,
          userAction: isLiked ? undefined : "liked",
        };
      })
    );
  };

  const handleDislike = (rid: string) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) => {
        if (review.id !== rid) return review;

        const isDisliked = review.userAction === "disliked";
        const isLiked = review.userAction === "liked";

        return {
          ...review,
          dislikes: isDisliked ? review.dislikes - 1 : review.dislikes + 1,
          likes: isLiked ? review.likes - 1 : review.likes,
          userAction: isDisliked ? undefined : "disliked",
        };
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      userName: loggedInUserName,
      rating: formData.rating,
      comment: formData.comment,
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      rating: Yup.number()
        .required("Rating is required")
        .min(1, "Please provide a rating"),
      comment: Yup.string()
        .required("Comment is required")
        .min(5, "Comment must be at least 5 characters"),
    }),
    onSubmit: (values) => {
      if (isEditing && lastAddedReviewId) {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.id === lastAddedReviewId
              ? { ...review, ...values, userName: loggedInUserName }
              : review
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
          userName: loggedInUserName,
          rating: Number(values.rating),
          date: formattedDate,
          comment: values.comment,
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
    },
  });

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

  return (
    <div className="product-reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">Ratings & Reviews ({reviews.length})</h2>
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
                aria-label="Like this review"
              >
                <span>👍</span>
                <span>{review.likes}</span>
              </button>
              <button
                className={`dislike-button ${
                  review.userAction === "disliked" ? "active" : ""
                }`}
                onClick={() => handleDislike(review.id)}
                aria-label="Dislike this review"
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
            <form onSubmit={formik.handleSubmit}>
              <div className="logged-in-username">
                {loggedInUserName && `Username: ${loggedInUserName}`}
              </div>
              <div className="rating-stars">
                <label>Rating:</label>
                <div className="stars">
                  {renderStars(
                    formik.values.rating,
                    true,
                    hoveredRating,
                    setHoveredRating
                  )}
                </div>
              </div>
              {formik.touched.rating && formik.errors.rating && (
                <div className="error">{formik.errors.rating}</div>
              )}
              <textarea
                name="comment"
                placeholder="Comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.comment && formik.errors.comment && (
                <div className="error">{formik.errors.comment}</div>
              )}
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
