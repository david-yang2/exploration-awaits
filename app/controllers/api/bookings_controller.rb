class Api::BookingsController < ApplicationController

    #GET    /api/bookings
    def index
        @bookings = Booking.all
    end

    #GET    /api/bookings/:id
    def show
        @booking = Booking.find(params[:id])
    end

    #POST   /api/bookings
    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            return
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    #PATCH  /api/bookings/:id
    def update
        @booking = Booking.find(params[:id])

        if @booking.update(booking_params)
            return
        else 
            render json: @booking.errors.full_messages, status: 422
        end
    end

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