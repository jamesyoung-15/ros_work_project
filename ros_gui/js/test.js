// create ros object
ros = new ROSLIB.Ros({
    url : "ws://localhost:9090"
});

var topics =[];
var topicTypes = [];
var createdTopics = [];

//list ros topics
function listRosTopics()
{
    var topicTypeClient = new ROSLIB.Service({
        ros : ros,
        name : '/rosapi/topics',
        serviceType : 'rosapi/Topics',
    });
    var request = new ROSLIB.ServiceRequest();
    topicTypeClient.callService(request, function(result) {
        //console.log('Topics: ', result.topics); //topic names
        console.log('Topic Types: ', result.types); //topic types 
        topics = result.topics;
        topicTypes = result.types;
        // result.types.forEach((item,index)=>{
        //     if(result.types[index]=="sensor_msgs/CompressedImage")
        //     {
        //         console.log(item, index, result.topics[index]);
        //     }
        // });
    });
}

function addTopic(){
    document.getElementById("selectTopic").innerHTML="";
    topicTypes.forEach((item,index)=>{
        if(topicTypes[index]=="sensor_msgs/CompressedImage")
        {
            console.log(item, index, topics[index]);
            let createOption = document.createElement('option');
            createOption.value = topics[index];
            createOption.innerHTML = topics[index];
            document.getElementById("selectTopic").appendChild(createOption);
        }
    });
}