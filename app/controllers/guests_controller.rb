class GuestsController < ApplicationController

    def index 
        @guests = Guest.all

        @meals = {
          "meat" => 0,
          "veggie" => 0,
          "lobster" => 0
        }

        @totals = {
          "reception" => 0,
          "brunch" => 0
        }

        @guests.each { |guest|
          if guest.meal == "meat"
            @meals["meat"] = @meals["meat"] + 1
          elsif guest.meal == "veggie"
            @meals["veggie"] = @meals["veggie"] + 1
          elsif guest.meal == "lobster"
            @meals["lobster"] = @meals["lobster"] + 1
          end

          if guest.attending 
            @totals["reception"] = @totals["reception"] + 1
          end

          if guest.brunch 
            @totals["brunch"] = @totals["brunch"] + 1 
          end
        }
    end

    def show 
        @guest = Guest.find_by(id: params[:id])
    end

    def new
      @guest = Guest.new
    end
  
    def create
      @guest = Guest.new(guest_params)

      if !@guest.attending 
        @guest.meal = ""
      end

      if @guest.save
        redirect_to guest_path(@guest)
      else
        render :new
      end
    end
  
    def destroy
        @guest = Guest.find_by(id: params[:id])
        @guest.destroy
        redirect_to guests_path
    end
  
    private

    def guest_params
      params.require(:guest).permit(:name, :attending, :meal, :brunch)
    end
  
  
  end