class BlogsController < ApplicationController
    def index
        render json: Blog.all
    end
    def show
        blog = find_blog
        render json: blog
    end
    private
    def blog_params
        params.permit(:name,:preview)
    end
    def find_blog
        Blog.find_by(id: params[:id])
    end
end
