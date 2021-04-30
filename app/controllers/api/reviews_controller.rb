class Api::ReviewsController < ApplicationController

    #GET    /api/reviews
    def index
        @reviews = Review.all
    end

    #GET    /api/carlistings/:carlisting_id/reviews/:id
    def show
        @carlisting = Carlisting.find(params[:carlisting_id])
        render json: @carlisting.reviews
    end

    #POST   /api/carlistings/:carlisting_id/reviews
    def create
        @review = Review.new(review_params)
        if @review.save
            return
        else 
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    #PATCH  /api/carlistings/:carlisting_id/reviews/:id
    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            return
        else 
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.require(:review).permit(:carlisting_id, :user_id, :body, :rating)
    end
end