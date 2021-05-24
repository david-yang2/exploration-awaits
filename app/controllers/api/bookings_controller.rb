class Api::BookingsController < ApplicationController

    #GET    /api/users/:user_id/bookings
    def index
        @user = User.find(params[:user_id])
        render json: @user.bookings
    end

    # #GET    /api/bookings/:id
    # def show
    #     @booking = Booking.find(params[:id])
    # end

    #POST   /api/users/:user_id/bookings
    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    # #PATCH  /api/bookings/:id
    # def update
    #     @booking = Booking.find(params[:id])

    #     if @booking.update(booking_params)
    #         return
    #     else 
    #         render json: @booking.errors.full_messages, status: 422
    #     end
    # end

    #DELETE /api/bookings/:id
    def destroy
        @booking = Booking.find(params[:id])

        if @booking.destroy
            return
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end


    private
    def booking_params
        params.require(:booking).permit(:car_id, :user_id, :pickup_date, :dropoff_date)
    end

end