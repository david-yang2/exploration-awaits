class Api::CarlistingsController < ApplicationController
    #GET    /api/carlistings 
    def index
        @carlistings = Carlisting.all
    end

    #GET    /api/carlistings/:id
    def show
        @carlisting = Carlisting.find(params[:id])
    end

    #POST   /api/carlistings
    def create
        @carlisting = Carlisting.new(carlisting_params)

        if @carlisting.save
            return
        else 
            render json: @carlisting.errors.full_messages, status: 422
        end
    end

    #PATCH  /api/carlistings/:id
    def update
        @carlisting = Carlisting.find(params[:id])

        if @carlisting.update(carlisting_params)
            return
        else
            render json: @carlisting.errors.full_messages, status: 422
        end
    end

    #DELETE /api/carlistings/:id
    def destroy 
        @carlisting = Carlisting.find(params[:id])

        if @carlisting.destroy
            return
        else
            render json: @carlisting.errors.full_messages, status: 422
        end
    end

    private
    def carlisting_params
        params.require(:carlisting).permit(:owner_id, :year, :make, :model, :price, :cartype,:drivetrain,
                                        :transmission, :tripcapacity, :seats, :sleeps, :lockers, :rooftoptent
                                        :shower, :kitchenset, :fridge, :longitude, :latitude)
    end
end