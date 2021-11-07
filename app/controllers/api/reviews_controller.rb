class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token 
    #GET    /api/carlistings/:carlisting_id/reviews
    def index
        @carlisting = Carlisting.find(params[:carlisting_id])
        render json: @carlisting.reviews
    end

    #GET    /api/reviews/:id
    def show
        @review = Review.find(params[:id])
    end

    #POST   /api/carlistings/:carlisting_id/reviews
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else 
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    #PATCH  /api/reviews/:id
    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else 
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    #DELETE /api/bookings/:id
    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            return
        else 
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end        

    private
    def review_params
        params.require(:review).permit(:id, :carlisting_id, :user_id, :body, :rating, :created_at, :updated_at)
    end
end