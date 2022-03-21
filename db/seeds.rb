# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Blog.destroy_all
Blog.reset_pk_sequence
Blog.create(title:"React: Componenets",preview:"When first learning React, a key concept you\'ll encounter are components. These are essentially building blocks for your app. They help to make your code “dry”, dynamic and are an essential part of what developers like to call SOC...",url:"https://dev.to/robinlashae1/react-components-e2g")
Blog.create(title:"A Basic guide to Active Record Commands",preview:"When transitioning to Ruby\'s active record, the commands can be a little long winded and tedious. Here i have provided a cheat sheet to basic AR commands...",url:"https://dev.to/robinlashae1/a-basic-guide-to-active-record-commands-doh")
Blog.create(title:"Renaming a Rails app",preview:"Have you ever began a project without having a solid name picked out? I'm sure all of us have at least once. This is completely ok, we shouldn't just let inspiration fade because we can't think of a application name. Once an appropriate name...",url:"https://dev.to/robinlashae1/renaming-a-rails-app-3fg0")
Blog.create(title:"Instance Vs. Class",preview:"On introduction, the idea of instances and classes can seem overwhelming. However, they are actually quite simple concepts to understand over time. Let’s take a step back, and look at them in another light...",url:"https://dev.to/robinlashae1/instance-vs-class-1lp9")
puts "Done Seeding"