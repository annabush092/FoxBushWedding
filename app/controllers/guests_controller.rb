class GuestsController < ApplicationController

    def index 
        @guests = Guest.all
    end

    def show 
        @guest = Guest.find_by(id: params[:id])
    end

    def new
      @guest = Guest.new
    end
  
    def create
      @guest = Guest.new(guest_params)
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
      params.require(:guest).permit(:name, :attending)
    end
  
  
  end