import React from 'react'
import {
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Card,
  Image,
  Icon,
  Button
} from 'semantic-ui-react'
function Article() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FEATURED ARTICLES</h1>
      <CardGroup itemsPerRow={3}>
        <Card>
          <CardContent>
            <Image src={require("./elvish.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>Elvish yadav</CardHeader>
            <CardDescription>
              elvish yadav is a famous youtuber and bigboss winner <strong>influencer</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 5 &nbsp;
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Image src={require("./aliabhatt.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>Alia bhatt</CardHeader>
            <CardDescription>
              alia bhatt is famous actress who has worked in many films <strong>actress</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 5 &nbsp;
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Image src={require("./rohit.png")} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <CardHeader>Rohit shetty</CardHeader>
            <CardDescription>
              Rohit is an indian film maker <strong>producer</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div>
              <Icon name='star' color='yellow' /> 4 &nbsp;
            </div>
          </CardContent>
        </Card>
      </CardGroup>
      <Button primary style={{ marginTop: "20px" }}>SEE ALL ARTICLES</Button>
    </div>
  )
}
export default Article