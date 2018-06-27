var mongoose = require('mongoose');
Baseball = require('./model/Baseball.js');
mongoose.connect('mongodb://admin2:admin2@ds251240.mlab.com:51240/sports_compare'); 
var db = mongoose.connection;

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const BaseballType = new GraphQLObjectType({
    name:'Baseball',
    fields:() => ({
        name:{type:GraphQLString},
        position:{type:GraphQLString},
		AB:{type:GraphQLString},
		R:{type:GraphQLString},
		H:{type:GraphQLString},
		HR:{type:GraphQLString},
		RBI:{type: GraphQLString},
		SB:{type: GraphQLString},
		AVG:{type: GraphQLString},
		OBP:{type: GraphQLString},
		OPS:{type: GraphQLString}
    })
})

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        baseball:{
            type: new GraphQLList(BaseballType),
            args:{
                name:{type:GraphQLString}
            },
            resolve(parentValue, args){
                var foundItems = new Promise((resolve, reject) => {
                    Baseball.find({'name':args.name},(err, todos) => {
                        err ? reject(err) : resolve(todos)
                    })
                })
                return foundItems
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});