# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170719181335) do

  create_table "wheel_deflections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.text "description"
    t.decimal "tire_width", precision: 10
    t.string "tire_width_unit"
    t.decimal "compression_modulus", precision: 10
    t.string "compression_modulus_unit"
    t.decimal "load_on_wheel", precision: 10
    t.string "load_on_wheel_unit"
    t.decimal "outside_radius", precision: 10
    t.string "outside_radius_unit"
    t.decimal "tread_thicknes", precision: 10
    t.string "tread_thickness_unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
