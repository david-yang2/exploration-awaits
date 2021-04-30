class Api::TripsController < ApplicationController

    #GET    /api/trips
    def index
        @carlisting = Carlisting.find(params[:carlisting_id])
        render json: @carlisting.trips
    end 

    #GET    /api/carlistings/:carlisting_id/trips/:id
    def show
        @trip = Trip.find(params[:id])
    end

    #POST   /api/trips
    def create
        @trip = Trip.new(trip_params)
        if @trip.save
            return
        else
            render json: @trip.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def trip_params
        params.require(:trip).permit(:carlisting_id, :beg_long, :beg_lat, :end_long, :end_lat)
    end
            
end