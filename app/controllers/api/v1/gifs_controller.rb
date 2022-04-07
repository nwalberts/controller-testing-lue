class Api::V1::GifsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    gifs = Gif.order(likes: :desc)
    render json: gifs
  end

  def create
    new_gif = Gif.create(gif_params)
    render json: new_gif
  end

  def show
    render json: Gif.find(params[:id])
  end

  private

  def gif_params
    params.require(:gif).permit(:name, :url, :likes)
  end
end
