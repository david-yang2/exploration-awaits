class Api::BookingsController < ApplicationController
    def index
        @bookings = Booking.all
    end

    def show
        @booking = Booking.find(params[:id])
    end

    def create
        @booking = Booking.create(booking_params)
        if @booking.save
            return
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])

        if @booking.update(booking_params)
            return
        else 
            render json: @booking.errors.full_messages, status: 422
        end
    end

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
        params.require(:booking).permit(:)
    end

end